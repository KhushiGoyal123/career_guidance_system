# load_model.py
import pickle

def load_model(file_path):
    with open(file_path, 'rb') as file:
        model = pickle.load(file)
    return model

if __name__ == "__main__":
    import sys
    model = load_model(sys.argv[1])
    # Perform operations with the model
